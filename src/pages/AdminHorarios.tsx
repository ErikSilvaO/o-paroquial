import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Horario {
  id: string;
  dia: string;
  tipo: string;
  horario: string;
  local: string;
}

const diasSemana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo"
];

const tiposAtividade = [
  "Missa",
  "Adoração ao Santíssimo",
  "Terço",
  "Confissões",
  "Catequese",
  "Grupo de Oração",
  "Reunião Pastoral"
];

const AdminHorarios = () => {
  const { toast } = useToast();
  const [horarios, setHorarios] = useState<Horario[]>([
    { id: "1", dia: "Segunda-feira", tipo: "Missa", horario: "07:00", local: "Igreja Matriz" },
    { id: "2", dia: "Terça-feira", tipo: "Missa", horario: "19:00", local: "Igreja Matriz" },
    { id: "3", dia: "Quarta-feira", tipo: "Adoração ao Santíssimo", horario: "15:00", local: "Capela" },
    { id: "4", dia: "Quinta-feira", tipo: "Missa", horario: "19:00", local: "Igreja Matriz" },
    { id: "5", dia: "Sexta-feira", tipo: "Terço", horario: "18:30", local: "Igreja Matriz" },
    { id: "6", dia: "Sábado", tipo: "Confissões", horario: "16:00", local: "Igreja Matriz" },
    { id: "7", dia: "Sábado", tipo: "Missa", horario: "19:00", local: "Igreja Matriz" },
    { id: "8", dia: "Domingo", tipo: "Missa", horario: "08:00", local: "Igreja Matriz" },
    { id: "9", dia: "Domingo", tipo: "Missa", horario: "10:00", local: "Igreja Matriz" },
    { id: "10", dia: "Domingo", tipo: "Missa", horario: "19:00", local: "Igreja Matriz" },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingHorario, setEditingHorario] = useState<Horario | null>(null);
  const [formData, setFormData] = useState({
    dia: "",
    tipo: "",
    horario: "",
    local: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingHorario) {
      setHorarios(horarios.map(h => 
        h.id === editingHorario.id 
          ? { ...editingHorario, ...formData }
          : h
      ));
      toast({
        title: "Horário atualizado",
        description: "As alterações foram salvas com sucesso.",
      });
    } else {
      const newHorario: Horario = {
        id: Date.now().toString(),
        ...formData
      };
      setHorarios([...horarios, newHorario]);
      toast({
        title: "Horário adicionado",
        description: "O novo horário foi cadastrado com sucesso.",
      });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (horario: Horario) => {
    setEditingHorario(horario);
    setFormData({
      dia: horario.dia,
      tipo: horario.tipo,
      horario: horario.horario,
      local: horario.local
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setHorarios(horarios.filter(h => h.id !== id));
    toast({
      title: "Horário excluído",
      description: "O horário foi removido com sucesso.",
      variant: "destructive"
    });
  };

  const resetForm = () => {
    setEditingHorario(null);
    setFormData({
      dia: "",
      tipo: "",
      horario: "",
      local: ""
    });
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  const getHorariosPorDia = (dia: string) => {
    return horarios
      .filter(h => h.dia === dia)
      .sort((a, b) => a.horario.localeCompare(b.horario));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Gerenciar Horários</h1>
              <p className="text-muted-foreground">
                Cadastre e organize os horários das atividades semanais da paróquia
              </p>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm}>
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Horário
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingHorario ? "Editar Horário" : "Novo Horário"}
                  </DialogTitle>
                  <DialogDescription>
                    Preencha os dados do horário da atividade
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="dia">Dia da Semana</Label>
                      <Select
                        value={formData.dia}
                        onValueChange={(value) => setFormData({ ...formData, dia: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o dia" />
                        </SelectTrigger>
                        <SelectContent>
                          {diasSemana.map(dia => (
                            <SelectItem key={dia} value={dia}>{dia}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Atividade</Label>
                      <Select
                        value={formData.tipo}
                        onValueChange={(value) => setFormData({ ...formData, tipo: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {tiposAtividade.map(tipo => (
                            <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="horario">Horário</Label>
                      <Input
                        id="horario"
                        type="time"
                        value={formData.horario}
                        onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="local">Local</Label>
                      <Input
                        id="local"
                        value={formData.local}
                        onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                        placeholder="Ex: Igreja Matriz"
                        required
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={handleDialogClose}>
                      Cancelar
                    </Button>
                    <Button type="submit">
                      {editingHorario ? "Salvar Alterações" : "Adicionar"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-6">
            {diasSemana.map(dia => {
              const horariosDoDia = getHorariosPorDia(dia);
              
              return (
                <Card key={dia}>
                  <CardHeader>
                    <CardTitle>{dia}</CardTitle>
                    <CardDescription>
                      {horariosDoDia.length} {horariosDoDia.length === 1 ? 'atividade' : 'atividades'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {horariosDoDia.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Horário</TableHead>
                            <TableHead>Atividade</TableHead>
                            <TableHead>Local</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {horariosDoDia.map(horario => (
                            <TableRow key={horario.id}>
                              <TableCell className="font-medium">{horario.horario}</TableCell>
                              <TableCell>{horario.tipo}</TableCell>
                              <TableCell>{horario.local}</TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleEdit(horario)}
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(horario.id)}
                                  >
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <p className="text-muted-foreground text-center py-8">
                        Nenhuma atividade cadastrada para este dia
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHorarios;
