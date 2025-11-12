import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <div className="text-center mb-6">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-2xl">P</span>
              </div>
              <h1 className="text-2xl font-bold text-primary mb-2">Bem-vindo</h1>
              <p className="text-muted-foreground">Acesse sua conta ou crie uma nova</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="signup">Cadastrar</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Senha</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Entrar
                  </Button>

                  <button className="w-full text-sm text-primary hover:underline">
                    Esqueceu sua senha?
                  </button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome Completo</label>
                    <Input placeholder="Seu nome" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Telefone</label>
                    <Input placeholder="(11) 12345-6789" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Senha</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirmar Senha</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                    Criar Conta
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Auth;
