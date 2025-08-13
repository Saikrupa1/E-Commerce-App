from app import app

def test_get_products():
    client = app.test_client()
    response = client.get("/api/products")
    assert response.status_code == 200
    data = response.get_json()
    assert len(data) == 2
    assert data[0]["name"] == "Laptop"
