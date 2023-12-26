from django.urls import path
from .views import Rec_palces_views

urlpatterns = [
    path("",Rec_palces_views.as_view())
]
