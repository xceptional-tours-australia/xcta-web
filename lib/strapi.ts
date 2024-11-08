export async function getServices() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/services?populate=*`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
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
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/advantages?populate=*`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
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
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/our-teams?populate=*`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
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
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/testimonials?populate=*`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
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