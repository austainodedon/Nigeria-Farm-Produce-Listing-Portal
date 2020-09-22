from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Resellar
from .serializers import ResellarSerializer

class ResellarListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Resellar.objects.all()
    serializer_class = ResellarSerializer
    pagination_class = None

class ResellarView(RetrieveAPIView):
    queryset = Resellar.objects.all()
    serializer_class = ResellarSerializer

class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Resellar.objects.filter(top_seller=True)
    serializer_class = ResellarSerializer
    pagination_class = None