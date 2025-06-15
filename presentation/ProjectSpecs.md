Project Spec

## **Project: IoT Temperature Logger with Weather Comparison**
### **Overview**
This project involves developing a TypeScript-based IoT application that **simulates indoor temperature data**, fetches outdoor temperature using the OpenWeather API, and compares both readings.

### **Goals**
1. Generate **mock** indoor temperature values to simulate sensor data.
2. Fetch real-time outdoor temperature using OpenWeather API.
3. Compare indoor vs. outdoor readings.
4. Log and visualize the data for further insights.

### **Tech Stack**
- **Runtime**: Node.js  
- **Language**: TypeScript  
- **Libraries**:
  - `axios` → For fetching weather data
  - `dotenv` → For API key management

### **Steps**
1. **Set up the environment**  
   - Install dependencies (`axios`, `dotenv`).  
   - Configure OpenWeather API key.

2. **Generate mock indoor temperature**  
   - Use a function that returns a realistic range of simulated temperatures (e.g., 18–27°C).

3. **Fetch outdoor temperature**  
   - Use OpenWeather API to fetch temperature based on latitude & longitude.  
   - Extract and process relevant data.

4. **Compare and analyze**  
   - Log both indoor and outdoor readings.  
   - Identify trends or notable differences.

5. **Expand functionality**  
   - Store logs in a local database.  
   - Build a simple dashboard for visualization.

### **Expected Output**
- Console logs showing:
  - Simulated **indoor temperature**  
  - **Outdoor temperature** (from API)  
  - **Difference** between both values