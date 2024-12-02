import React, { useEffect, useState } from "react";

const PlaceOrder = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [orderDetails, setOrderDetails] = useState([]);
  const [placedOrders, setPlacedOrders] = useState([]);

  // Fetch menu items on component load
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/menu");
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error.message);
      }
    };
    fetchMenuItems();
  }, []);

  // Handle quantity changes
  const handleQuantityChange = (menuID, quantity) => {
    setSelectedItems((prev) => ({
      ...prev,
      [menuID]: quantity > 0 ? quantity : undefined,
    }));
  };

  // Add selected items to order details
  const handleAddToOrder = () => {
    const newOrderDetails = menuItems
      .filter((item) => selectedItems[item.menuID])
      .map((item) => ({
        menuID: item.menuID,
        name: item.name,
        quantity: parseInt(selectedItems[item.menuID], 10),
        price: Number(item.price),
      }));

    if (newOrderDetails.length === 0) {
      alert("Please select at least one item.");
      return;
    }

    setOrderDetails(newOrderDetails);
  };

  // Remove an item from the order summary
  const handleRemoveItem = (menuID) => {
    setOrderDetails((prev) => prev.filter((item) => item.menuID !== menuID));
  };

  // Place the order
  const handlePlaceOrder = async () => {
    if (orderDetails.length === 0) {
      alert("Please add items to your order.");
      return;
    }

    const orderData = {
      customerID: 1, // Replace with actual customer ID
      staffID: 2, // Replace with actual staff ID
      date: new Date().toISOString().split("T")[0],
      orderDetails: orderDetails.map(({ menuID, quantity }) => ({
        menuID,
        quantity,
      })),
    };

    try {
      const response = await fetch("http://localhost:4000/api/customerOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        // Add the successfully placed order to "Placed Orders"
        const placedOrder = {
          id: data.customerOrderID,
          date: orderData.date,
          items: orderDetails.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            total: (item.quantity * item.price).toFixed(2),
          })),
        };
        setPlacedOrders((prev) => [...prev, placedOrder]);

        setSelectedItems({});
        setOrderDetails([]); // Clear the order details
      } else {
        alert(data.message || "Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* Placed Orders Table */}
      {placedOrders.length > 0 && (
        <>
          <h1>Placed Orders</h1>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {placedOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.name} - Quantity: {item.quantity} - Total: $
                          {item.total}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <h1>Place Order</h1>

      {/* Menu Items Table */}
      <table>
        <thead>
          <tr>
            <th>Menu ID</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.menuID}>
              <td>{item.menuID}</td>
              <td>{item.name}</td>
              <td>{Number(item.price).toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  placeholder="Quantity"
                  value={selectedItems[item.menuID] || ""}
                  onChange={(e) =>
                    handleQuantityChange(item.menuID, parseInt(e.target.value, 10))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddToOrder}>Add to Order</button>

      {/* Order Summary Table */}
      {orderDetails.length > 0 && (
        <>
          <h1>Order Summary</h1>
          <table>
            <thead>
              <tr>
                <th>Menu ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Total ($)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.map((item) => (
                <tr key={item.menuID}>
                  <td>{item.menuID}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.quantity * item.price).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(item.menuID)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default PlaceOrder;
