import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class PrayerTimesView(APIView):
    def get(self, request, *args, **kwargs):
        api_url = "https://namaztimes.kz/api/praytimes"
        location_id = kwargs.get('id', 8408)  # Default ID or from URL

        params = {"id": location_id, "type": "json"}
        response = requests.get(api_url, params=params)

        if response.status_code == 200:
            return Response(response.json())
        else:
            return Response({"error": "Failed to fetch prayer times"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
