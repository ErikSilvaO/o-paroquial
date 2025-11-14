import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarPlus, Edit, Trash2, Church, Heart, Baby, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminAgenda = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");

  const events = [
    { id: 1, title: "Missa Dominical", type: "missa", date: "2024-12-15", time: "10:00", location: "Igreja Matriz", participants: 0 },
    { id: 2, title: "Casamento - João e Maria", type: "casamento", date: "2024-12-20", time: "15:00", location: "Capela São José", participants: 80 },
    { id: 3, title: "Batismo - Pedro Silva", type: "batismo", date: "2024-12-22", time: "14:00", location: "Igreja Matriz", participants: 30 },
    { id: 4, title: "Encontro Jovens", type: "pastoral", date: "2024-12-18", time: "19:00", location: "Salão Paroquial", participants: 45 },
    { id: 5, title: "Missa da Noite", type: "missa", date: "2024-12-15", time: "19:00", location: "Igreja Matriz", participants: 0 }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "missa": return <Church className="h-4 w-4" />;
      case "casamento": return <Heart className="h-4 w-4" />;
      case "batismo": return <Baby className="h-4 w-4" />;
      case "pastoral": return <Users className="h-4 w-4" />;
      default: return null;
    }
  };

  const getTypeBadge = (type: string) => {
    const variants: Record<string, string> = {
      missa: "default",
      casamento: "secondary",
      batismo: "outline",
      pastoral: "default"
    };
    return variants[type] || "default";
  };

  const filteredEvents = selectedType === "all" 
    ? events 
    : events.filter(event => event.type === selectedType);

  const handleSaveEvent = () => {
    setIsDialogOpen(false);
    toast({
      title: "Evento criado",
      description: "Novo evento adicionado à agenda"
    });
  };

  const handleDeleteEvent = (eventId: number) => {
    toast({
      title: "Evento excluído",
      description: "O evento foi removido da agenda"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Gerenciamento de Agenda</h1>
          <p className="text-muted-foreground">Gerencie missas, casamentos, batismos e eventos pastorais</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle>Agenda Paroquial</CardTitle>
                <CardDescription>Total de {events.length} eventos cadastrados</CardDescription>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filtrar por tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="missa">Missas</SelectItem>
                    <SelectItem value="casamento">Casamentos</SelectItem>
                    <SelectItem value="batismo">Batismos</SelectItem>
                    <SelectItem value="pastoral">Eventos Pastorais</SelectItem>
                  </SelectContent>
                </Select>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full sm:w-auto">
                      <CalendarPlus className="mr-2 h-4 w-4" />
                      Novo Evento
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Criar Novo Evento</DialogTitle>
                      <DialogDescription>Preencha os dados do evento</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="event-title">Título do Evento</Label>
                        <Input id="event-title" placeholder="Ex: Missa Dominical" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="event-type">Tipo</Label>
                          <Select>
                            <SelectTrigger id="event-type">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="missa">Missa</SelectItem>
                              <SelectItem value="casamento">Casamento</SelectItem>
                              <SelectItem value="batismo">Batismo</SelectItem>
                              <SelectItem value="pastoral">Evento Pastoral</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="event-location">Local</Label>
                          <Input id="event-location" placeholder="Ex: Igreja Matriz" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="event-date">Data</Label>
                          <Input id="event-date" type="date" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="event-time">Horário</Label>
                          <Input id="event-time" type="time" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="event-description">Descrição</Label>
                        <Textarea id="event-description" placeholder="Descreva o evento..." rows={3} />
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={handleSaveEvent}>Criar Evento</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            {getTypeIcon(event.type)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground mb-1">{event.title}</h3>
                            <Badge variant={getTypeBadge(event.type) as any}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">Data:</span> {new Date(event.date).toLocaleDateString('pt-BR')}
                          </div>
                          <div>
                            <span className="font-medium">Horário:</span> {event.time}
                          </div>
                          <div>
                            <span className="font-medium">Local:</span> {event.location}
                          </div>
                        </div>
                        
                        {event.participants > 0 && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Participantes:</span> {event.participants}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteEvent(event.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminAgenda;
