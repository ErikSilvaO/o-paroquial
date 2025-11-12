import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Calendar, Bell, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link to="/eventos">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Eventos</h3>
                  <p className="text-sm text-muted-foreground">Próximos eventos da paróquia</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/avisos">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Avisos</h3>
                  <p className="text-sm text-muted-foreground">Últimos comunicados</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/horarios">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Horários</h3>
                  <p className="text-sm text-muted-foreground">Horários das atividades</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Próximos Eventos */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Próximos Eventos</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold">Catequese Infantil</h3>
                  <p className="text-sm text-muted-foreground">Sábado, 15/11 às 14h</p>
                  <p className="text-sm text-muted-foreground">Salão Paroquial</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold">Missa Dominical</h3>
                  <p className="text-sm text-muted-foreground">Domingo, 16/11 às 10h</p>
                  <p className="text-sm text-muted-foreground">Igreja Matriz</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold">Grupo de Oração</h3>
                  <p className="text-sm text-muted-foreground">Quarta, 19/11 às 19h30</p>
                  <p className="text-sm text-muted-foreground">Capela</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Últimos Avisos */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Últimos Avisos</h2>
            <div className="space-y-4">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Inscrições Abertas</h3>
                    <p className="text-sm text-muted-foreground">
                      Estão abertas as inscrições para a catequese de primeira comunhão 2025.
                    </p>
                    <span className="text-xs text-muted-foreground">Há 2 dias</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horário Especial</h3>
                    <p className="text-sm text-muted-foreground">
                      No próximo domingo haverá missa especial às 18h para celebração do padroeiro.
                    </p>
                    <span className="text-xs text-muted-foreground">Há 5 dias</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Campanha Solidária</h3>
                    <p className="text-sm text-muted-foreground">
                      Participe da campanha de arrecadação de alimentos para famílias carentes.
                    </p>
                    <span className="text-xs text-muted-foreground">Há 1 semana</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
