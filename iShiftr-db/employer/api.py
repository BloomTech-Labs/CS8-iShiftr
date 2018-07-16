from django.contrib.auth.models import User
from rest_framework import authentication
from rest_framework import exceptions
from rest_framework import serializers, viewsets
from .models import Employer, Employee
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django import forms

class EmployerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employer
        fields = ("username", "email", "first_name", "last_name", "phone")
        widgets = {
            "password": forms.PasswordInput(),
        }

class EmployerViewSet(viewsets.ModelViewSet):
    serializer_class = EmployerSerializer
    queryset = Employer.objects.all()

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
        fields = ("username", "email", "first_name", "last_name", "phone")        
        widgets = {
            "password": forms.PasswordInput(),
        }

        def create(self, validated_data):
            user = self.context['request'].user
            Employee = Employee.objects.create(user=user, **validated_data)
            return Employee                                    

class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.none()

    def get_queryset(self):
        user = self.request.user
        if user.is_anonymous:
            return Employee.objects.none()
        else:
            return Employee.objects.filter(user=user)