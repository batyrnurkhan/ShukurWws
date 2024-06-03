from django.views.generic import ListView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q

from .models import Product, Category, Frequently_viewed, ProductRequest
from .serializers import (
    ProductSerializer,
    CategorySerializer,
    Frequently_viewed_products_serializers,
    ProductRequestSerializer
)

class ProductRaitingView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductView(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductViewCertifided(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.filter(certified=True)

class ProductViewNotCertifided(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.filter(certified=False)

class FrequentlyViewedView(generics.ListAPIView):
    serializer_class = Frequently_viewed_products_serializers
    queryset = Frequently_viewed.objects.all()

class SearchView(ListView):
    template_name = "products/test.html"
    context_object_name = "object"

    def get_queryset(self):
        return Product.objects.filter()

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
class CategoryListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(category__slug=self.kwargs['slug'])

class CategoryListAPIViewCertifided(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(category__slug=self.kwargs['slug']).filter(certified=True)

class CategoryListAPIViewNotCertifided(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(category__slug=self.kwargs['slug']).filter(certified=False)

class ProductListCreateView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        search_param = self.request.query_params.get('search', None)
        if search_param:
            queryset = queryset.filter(
                Q(name__icontains=search_param) |
                Q(details__icontains=search_param) |
                Q(ingredients__icontains=search_param)
            )
        return queryset

class ProductRequestCreateView(generics.CreateAPIView):
    queryset = ProductRequest.objects.all()
    serializer_class = ProductRequestSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(requested_by=self.request.user)
