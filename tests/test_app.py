from app import app

def test_get_products():
    client = app.test_client()
    response = client.get("/products")  # ✅ Correct route
    assert response.status_code == 200

    data = response.get_json()
    assert isinstance(data, list)
    assert len(data) == 3  # Based on your Flask app's hardcoded products list
    assert data[0]["name"] == "Laptop"
