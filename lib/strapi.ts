export async function getServices() {
  const apiUrl = `${process.env.API_URL}/services?populate=*`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    const services = data.data    

    return services;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getAdvantages() {
  const apiUrl = `${process.env.API_URL}/advantages?populate=*`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    const services = data.data 

    return services;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getOurTeams() {
  const apiUrl = `${process.env.API_URL}/our-teams?populate=*`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    const services = data.data 

    return services;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getTestimonials() {
  const apiUrl = `${process.env.API_URL}/testimonials?populate=*`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    const services = data.data 

    return services;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}