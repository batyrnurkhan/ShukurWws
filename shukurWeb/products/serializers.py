from rest_framework import serializers
from .models import Product, Category, ProductRequest, ProductRating, Frequently_viewed


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']



class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'certified', 'rating', 'details', 'ingredients', 'category', 'parameter', 'img', 'category_name']

    def get_category_name(self, obj):
        return obj.category.name

class Frequently_viewed_products_serializers(serializers.ModelSerializer):
    content=ProductSerializer(many=True)

    class Meta:
        model = Frequently_viewed
        fields = "__all__"

class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRating
        fields = ['id', 'product', 'user', 'rating']

class ProductRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRequest
        fields = ['id', 'name', 'details', 'status', 'requested_by']
        read_only_fields = ['requested_by']

