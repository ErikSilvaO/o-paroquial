import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Calendar, MapPin, Users } from "lucide-react";
import { useState } from "react";

const Eventos = () => {
  const [filter, setFilter] = useState("TODOS");

  const eventos = [
    {
      id: 1,
      title: "Catequese - Infantil",
      description: "Inscrições abertas para turma de catequese infantil.",
      date: "15/11/2024",
      time: "14:00",
      location: "Salão Paroquial",
      category: "FORMAÇÃO",
      spots: 25,
    },
    {
      id: 2,
      title: "Reunião com os Funcionários",
      description: "Reunião mensal com os funcionários da paróquia.",
      date: "18/11/2024",
      time: "15:00",
      location: "Secretaria",
      category: "ADMINIST.",
      spots: 10,
    },
    {
      id: 3,
      title: "Retiro Espiritual",
      description: "Retiro com os jovens da paróquia.",
      date: "23/11/2024",
      time: "08:00",
      location: "Casa de Retiro",
      category: "ORAÇÃO",
      spots: 30,
    },
    {
      id: 4,
      title: "Confissão Especial",
      description: "Horário especial para confissões individuais.",
      date: "25/11/2024",
      time: "16:00",
      location: "Igreja Matriz",
      category: "SACRAMENT.",
      spots: null,
    },
  ];

  const categories = ["TODOS", "FORMAÇÃO", "SACRAMENT.", "ADMINIST.", "ORAÇÃO"];

  const filteredEventos = filter === "TODOS" 
    ? eventos 
    : eventos.filter(e => e.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Agenda de Eventos</h1>
            <p className="text-muted-foreground">Confira todos os eventos e atividades da paróquia</p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Buscar eventos..." 
              className="pl-10 h-12"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={filter === cat ? "bg-primary" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEventos.map((evento) => (
              <Card key={evento.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">{evento.title}</h3>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {evento.category}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{evento.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{evento.date} às {evento.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{evento.location}</span>
                  </div>
                  {evento.spots && (
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{evento.spots} vagas disponíveis</span>
                    </div>
                  )}
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">
                  Inscrever-se
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Eventos;
