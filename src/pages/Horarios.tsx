import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Horarios = () => {
  const [currentDay, setCurrentDay] = useState(0);

  const schedule = [
    {
      day: "Domingo",
      activities: [
        { time: "07:00", name: "Missa", location: "Matriz" },
        { time: "10:00", name: "Missa", location: "Matriz" },
        { time: "17:00", name: "Missa", location: "Matriz" },
        { time: "19:00", name: "Missa", location: "Matriz" },
      ],
    },
    {
      day: "Segunda-feira",
      activities: [
        { time: "07:00", name: "Missa", location: "Capela" },
        { time: "19:00", name: "Missa", location: "Capela" },
      ],
    },
    {
      day: "Terça-feira",
      activities: [
        { time: "07:00", name: "Missa", location: "Capela" },
        { time: "19:00", name: "Missa", location: "Capela" },
      ],
    },
    {
      day: "Quarta-feira",
      activities: [
        { time: "07:00", name: "Missa", location: "Capela" },
        { time: "19:00", name: "Missa", location: "Capela" },
        { time: "19:30", name: "Grupo de Oração", location: "Salão" },
      ],
    },
    {
      day: "Quinta-feira",
      activities: [
        { time: "07:00", name: "Missa", location: "Capela" },
        { time: "19:00", name: "Missa", location: "Capela" },
      ],
    },
    {
      day: "Sexta-feira",
      activities: [
        { time: "07:00", name: "Missa", location: "Capela" },
        { time: "19:00", name: "Missa", location: "Capela" },
        { time: "20:00", name: "Adoração ao Santíssimo", location: "Matriz" },
      ],
    },
    {
      day: "Sábado",
      activities: [
        { time: "07:00", name: "Missa", location: "Capela" },
        { time: "14:00", name: "Catequese Infantil", location: "Salão" },
        { time: "19:00", name: "Missa", location: "Matriz" },
      ],
    },
  ];

  const nextDay = () => {
    setCurrentDay((prev) => (prev + 1) % schedule.length);
  };

  const prevDay = () => {
    setCurrentDay((prev) => (prev - 1 + schedule.length) % schedule.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-primary mb-2">Horários de Atividades</h1>
            <p className="text-muted-foreground">Confira os horários das missas e atividades paroquiais</p>
          </div>

          {/* Schedule Card */}
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevDay}
                className="hover:bg-primary/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <h2 className="text-2xl font-bold text-primary">{schedule[currentDay].day}</h2>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextDay}
                className="hover:bg-primary/10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-4">
              {schedule[currentDay].activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div>
                    <p className="font-bold text-lg text-primary">{activity.name}</p>
                    <p className="text-sm text-muted-foreground">{activity.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Week Overview */}
          <div className="mt-8 grid grid-cols-7 gap-2">
            {schedule.map((day, index) => (
              <button
                key={index}
                onClick={() => setCurrentDay(index)}
                className={`p-3 rounded-lg text-sm font-medium transition-all ${
                  currentDay === index
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card hover:bg-muted"
                }`}
              >
                {day.day.substring(0, 3)}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Horarios;
