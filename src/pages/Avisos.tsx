import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Bell } from "lucide-react";

const Avisos = () => {
  const avisos = [
    {
      id: 1,
      title: "Inscrições Abertas - Catequese 2025",
      content: "Estão abertas as inscrições para a catequese de primeira comunhão 2025. Os interessados devem comparecer à secretaria paroquial de segunda a sexta, das 14h às 17h, munidos de certidão de batismo e documento de identidade.",
      date: "10/11/2024",
    },
    {
      id: 2,
      title: "Missa Especial do Padroeiro",
      content: "No próximo domingo, dia 16/11, haverá missa especial em honra ao nosso padroeiro às 18h. Convidamos toda a comunidade a participar desta celebração especial com procissão e bênção.",
      date: "08/11/2024",
    },
    {
      id: 3,
      title: "Campanha Solidária de Alimentos",
      content: "A paróquia está realizando uma campanha de arrecadação de alimentos não perecíveis para ajudar famílias carentes da nossa comunidade. As doações podem ser entregues na secretaria ou após as missas.",
      date: "05/11/2024",
    },
    {
      id: 4,
      title: "Retiro Espiritual - Jovens",
      content: "Será realizado um retiro espiritual para jovens de 15 a 25 anos nos dias 23 e 24 de novembro. Inscrições limitadas. Mais informações na secretaria.",
      date: "03/11/2024",
    },
    {
      id: 5,
      title: "Renovação de Batismo",
      content: "Convidamos todas as famílias que desejam renovar as promessas do batismo de seus filhos para a cerimônia especial que acontecerá no dia 30/11 durante a missa das 10h.",
      date: "01/11/2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Mural de Avisos</h1>
            <p className="text-muted-foreground">Comunicados e notícias da paróquia</p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Buscar avisos..." 
              className="pl-10 h-12"
            />
          </div>

          {/* Avisos List */}
          <div className="space-y-4">
            {avisos.map((aviso) => (
              <Card key={aviso.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-xl font-semibold text-primary">{aviso.title}</h2>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                        {aviso.date}
                      </span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{aviso.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Avisos;
