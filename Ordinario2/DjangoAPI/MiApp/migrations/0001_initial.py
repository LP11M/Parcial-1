# Generated by Django 4.1.13 on 2024-05-09 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Alumnos',
            fields=[
                ('IdAlumno', models.AutoField(primary_key=True, serialize=False)),
                ('NombreAlumno', models.CharField(max_length=500)),
                ('Carrera', models.CharField(max_length=500)),
                ('FechaIngreso', models.CharField(max_length=500)),
                ('FileFoto', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Carreras',
            fields=[
                ('IdCarrera', models.AutoField(primary_key=True, serialize=False)),
                ('NombreCarrera', models.CharField(max_length=500)),
            ],
        ),
    ]
