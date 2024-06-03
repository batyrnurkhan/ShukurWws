from django.urls import path
from .views import (
    ProductListCreateView,
    CategoryListView,
    CategoryListAPIView,
    CategoryListAPIViewCertifided,
    CategoryListAPIViewNotCertifided,
    ProductRequestCreateView,
    ProductRaitingView,
    ProductView,
    ProductViewCertifided,
    ProductViewNotCertifided,
    FrequentlyViewedView
)

urlpatterns = [
    path('list/', ProductListCreateView.as_view(), name='product-list'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('categories/<slug:slug>/', CategoryListAPIView.as_view(), name='category-list-detail'),
    path('product-requests/', ProductRequestCreateView.as_view(), name='product-request-create'),
    path('view/', ProductView.as_view(), name='product-view'),
    path('certify/', ProductViewCertifided.as_view(), name='product-certifided'),
    path('not_certify/', ProductViewNotCertifided.as_view(), name='product-not-certifided'),
    path('frequently_viewed/', FrequentlyViewedView.as_view(), name='frequently-viewed'),
    path('view/<int:pk>/', ProductRaitingView.as_view(), name='product-rating-view'),
    path('categories/<slug:slug>/certify/', CategoryListAPIViewCertifided.as_view(), name='category-certifided'),
    path('categories/<slug:slug>/not_certify/', CategoryListAPIViewNotCertifided.as_view(), name='category-not-certifided'),
]
