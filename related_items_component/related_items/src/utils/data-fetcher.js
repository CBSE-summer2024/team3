export async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Optionally rethrow the error to handle it in the component
    }
  }
  