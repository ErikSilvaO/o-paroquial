import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Entre em Contato</h1>
            <p className="text-muted-foreground">Tire suas dúvidas e entre em contato com a paróquia</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <Card className="p-6 mb-6">
                <h2 className="text-xl font-bold text-primary mb-4">Informações de Contato</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Endereço</h3>
                      <p className="text-sm text-muted-foreground">
                        Rua da Igreja, 123<br />
                        Centro - CEP 12345-678<br />
                        Cidade - Estado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <p className="text-sm text-muted-foreground">
                        (11) 1234-5678<br />
                        (11) 98765-4321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        contato@paroquia.com.br<br />
                        secretaria@paroquia.com.br
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-bold text-primary mb-4">Horário de Atendimento</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a Sexta:</span>
                    <span className="font-semibold">14:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado:</span>
                    <span className="font-semibold">09:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo:</span>
                    <span className="font-semibold">Após as missas</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Enviar Mensagem</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome</label>
                    <Input placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefone</label>
                  <Input placeholder="(11) 12345-6789" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Assunto</label>
                  <Input placeholder="Sobre o que deseja falar?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensagem</label>
                  <Textarea 
                    placeholder="Digite sua mensagem aqui..." 
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                  ENVIAR MENSAGEM
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contato;
