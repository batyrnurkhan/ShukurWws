from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from django.db.models import Q
from rest_framework import generics

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductListCreateView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        search_param = self.request.query_params.get('search', None)
        if search_param is not None:
            queryset = queryset.filter(
                Q(name__icontains=search_param) |
                Q(details__icontains=search_param) |
                Q(ingredients__icontains=search_param)
            )
        return queryset
