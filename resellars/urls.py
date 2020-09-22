from django.urls import path
from .views import ResellarListView, ResellarView, TopSellerView

urlpatterns = [
    path('', ResellarListView.as_view()),
    path('topseller', TopSellerView.as_view()),
    path('<pk>', ResellarView.as_view()),
]