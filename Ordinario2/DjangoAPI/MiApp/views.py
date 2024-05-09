from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser #parsear datos al modelo
from django.http.response import JsonResponse
from MiApp.models import Carreras,Alumnos
from MiApp.serializers import CarreraSerializer,AlumnosSerializer
#Importamos modelos y sus serializers

# Create your views here.

#creamos metodos para carreras
@csrf_exempt
def carreraApi(request,id=0):
    if request.method=='GET': #Metodo get
        carreras = Carreras.objects.all()
        carreras_serializer=CarreraSerializer(carreras,many=True)#Convertir a Json
        return JsonResponse(carreras_serializer.data,safe=False)
    elif request.method=='POST': #Metodo post
        carreras_data=JSONParser().parse(request)
        carreras_serializer=CarreraSerializer(data=carreras_data)
        if carreras_serializer.is_valid():#Guardamos en base
            carreras_serializer.save()
            return JsonResponse("Datos anadidos",safe=False)
        return JsonResponse("No se pudo anadir",safe=False)
    elif request.method=='PUT': #Metodo put para actualizar
        carreras_data=JSONParser().parse(request)
        carrera = Carreras.objects.get(IdCarrera=carreras_data['IdCarrera'])#primero recuperamos la info actual
        carreras_serializer=CarreraSerializer(carrera,data=carreras_data) #Actualizamos
        if carreras_serializer.is_valid():#Guardamos en base
            carreras_serializer.save()
            return JsonResponse("Actualizado",safe=False)
        return JsonResponse("No se pudo actualizar",safe=False)
    elif request.method=='DELETE': #Metodo delete
        carrera = Carreras.objects.get(IdCarrera=id)#primero recuperamos la info actual
        carrera.delete()
        return JsonResponse("Borrado con exito",safe=False)
    
@csrf_exempt
def alumnosApi(request,id=0):
    if request.method=='GET': #Metodo get
        alumnos = Alumnos.objects.all()
        alumnos_serializer=AlumnosSerializer(alumnos,many=True)#Convertir a Json
        return JsonResponse(alumnos_serializer.data,safe=False)
    elif request.method=='POST': #Metodo post
        alumnos_data=JSONParser().parse(request)
        alumnos_serializer=AlumnosSerializer(data=alumnos_data)
        if alumnos_serializer.is_valid():#Guardamos en base
            alumnos_serializer.save()
            return JsonResponse("Datos anadidos",safe=False)
        return JsonResponse("No se pudo anadir",safe=False)
    elif request.method=='PUT': #Metodo put para actualizar
        alumnos_data=JSONParser().parse(request)
        alumnos = Alumnos.objects.get(IdAlumno=alumnos_data['IdAlumno'])#primero recuperamos la info actual
        alumnos_serializer=AlumnosSerializer(alumnos,data=alumnos_data) #Actualizamos
        if alumnos_serializer.is_valid():#Guardamos en base
            alumnos_serializer.save()
            return JsonResponse("Actualizado",safe=False)
        return JsonResponse("No se pudo actualizar",safe=False)
    elif request.method=='DELETE': #Metodo delete
        alumnos = Alumnos.objects.get(IdAlumno=id)#primero recuperamos la info actual
        alumnos.delete()
        return JsonResponse("Borrado con exito",safe=False)