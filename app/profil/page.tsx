import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CalendarDays,
  Mail,
  Phone,
  School,
  Clock,
  AlertCircle,
} from "lucide-react";

// Exemple de données (à remplacer par les vraies données)
const studentData = {
  firstName: "Thomas",
  lastName: "Gasche",
  email: "thomas.gasche@nulavalo.euw",
  phone: "06 07 08 09 10",
  studentId: "2024-4256",
  class: "BTS CIEL",
  year: "2ème année",
  promotion: "2024-2025",
  absences: [
    {
      date: "2024-02-01",
      duration: "4h",
      reason: "Ranked Valorant (3 wins/3)",
      justified: true,
    },
    {
      date: "2024-01-15",
      duration: "2h",
      reason: "Hopital",
      justified: false,
    },
  ],
  delays: [
    { date: "2024-02-10", duration: "1min 30sec", reason: "Jfaisais l'amour" },
    {
      date: "2024-01-20",
      duration: "10min",
      reason: "Inspection des 92i de la ville",
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Profil Étudiant</h1>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card className="h-fit">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <Avatar className="h-32 w-32">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Photo de profil"
              />
              <AvatarFallback>
                {studentData.firstName[0]}
                {studentData.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">
              {studentData.firstName} {studentData.lastName}
            </h2>
            <Separator />
            <div className="w-full space-y-4">
              <div className="flex items-center gap-2">
                <School className="h-4 w-4 opacity-70" />
                <span className="text-sm">{studentData.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 opacity-70" />
                <span className="text-sm">
                  Promotion {studentData.promotion}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-70" />
                <span className="text-sm break-all">{studentData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 opacity-70" />
                <span className="text-sm">{studentData.phone}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">
                Informations académiques
              </h2>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Numéro étudiant</p>
                <p className="font-medium">{studentData.studentId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Classe</p>
                <p className="font-medium">{studentData.class}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Absences</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.absences.map((absence, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">
                        {new Date(absence.date).toLocaleDateString("fr-FR")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {absence.reason}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={absence.justified ? "default" : "destructive"}
                      >
                        {absence.justified ? "Justifiée" : "Non justifiée"}
                      </Badge>
                      <span className="text-sm font-medium">
                        {absence.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Retards</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.delays.map((delay, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">
                        {new Date(delay.date).toLocaleDateString("fr-FR")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {delay.reason}
                      </p>
                    </div>
                    <span className="text-sm font-medium">
                      {delay.duration}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
