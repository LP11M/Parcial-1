from django.urls import path
from MiApp import views #Nuestros metodos


urlpatterns=[
    path('carrera/', views.carreraApi),  # Matches /carrera/
    path('carrera/<int:id>/', views.carreraApi),  # Matches /carrera/{id}/
]