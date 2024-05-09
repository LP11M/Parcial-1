from rest_framework import serializers
from MiApp.models import Carreras,Alumnos


class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carreras
        fields=('IdCarrera','NombreCarrera')

class AlumnosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumnos
        fields=('IdAlumno','NombreAlumno','Carrera','FechaIngreso','FileFoto')    

        