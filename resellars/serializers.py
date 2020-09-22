from rest_framework import serializers
from .models import Resellar

class ResellarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resellar
        fields = '__all__'