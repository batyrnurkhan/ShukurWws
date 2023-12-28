from django.urls import path
from .views import Review_View
urlpatterns = [
    path("",Review_View.as_view())
]