import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, FileText, TrendingUp } from "lucide-react";

const Admin = () => {
  const stats = [
    {
      title: "Total de Membros",
      value: "247",
      description: "+12 este mês",
      icon: Users,
      trend: "+4.8%"
    },
    {
      title: "Eventos Ativos",
      value: "15",
      description: "Próximos 30 dias",
      icon: Calendar,
      trend: "+2"
    },
    {
      title: "Avisos Publicados",
      value: "8",
      description: "Este mês",
      icon: FileText,
      trend: "+3"
    },
    {
      title: "Inscrições em Eventos",
      value: "128",
      description: "Total ativo",
      icon: TrendingUp,
      trend: "+18%"
    }
  ];

  const recentActivity = [
    { action: "Novo membro cadastrado", user: "Maria Silva", time: "há 2 horas" },
    { action: "Inscrição em evento", user: "João Santos", time: "há 3 horas" },
    { action: "Aviso publicado", user: "Secretaria", time: "há 5 horas" },
    { action: "Evento criado", user: "Secretaria", time: "há 1 dia" },
    { action: "Membro atualizado", user: "Ana Costa", time: "há 2 dias" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Painel Administrativo</h1>
          <p className="text-muted-foreground">Visão geral da gestão paroquial</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground mb-2">{stat.description}</p>
                <span className="text-xs font-medium text-primary">{stat.trend}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Últimas ações realizadas no sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                  <div>
                    <p className="font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.user}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
