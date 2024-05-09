from django.db import models

# Create your models here.

class Carreras(models.Model):
    IdCarrera = models.AutoField(primary_key=True)
    NombreCarrera = models.CharField(max_length=500)

class Alumnos(models.Model):
    IdAlumno = models.AutoField(primary_key=True)
    NombreAlumno = models.CharField(max_length=500)
    Carrera = models.CharField(max_length=500)
    FechaIngreso = models.CharField(max_length=500)
    FileFoto = models.CharField(max_length=500)