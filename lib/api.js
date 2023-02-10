import qs from "qs";

const strapiUrl =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

//for main layout
export const getNavigationData = async () => {
  const query = qs.stringify(
    {
      populate: "deep",
    },
    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/main-menu?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const {
    data: {
      attributes: { body },
    },
  } = await res.json();
  return body;
};

// Home Page
export const getHomePageData = async () => {
  const query = qs.stringify(
    {
      populate: "deep",
    },
    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/home-page?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const {
    data: { attributes },
  } = await res.json();
  return attributes;
};

// for about page
export const getAboutPageData = async () => {
  const query = qs.stringify(
    {
      populate: "deep",
    },
    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/pages/find-by-slug/about-us?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const {
    data: {
      attributes: { blocks },
    },
  } = await res.json();
  return blocks[0];
};
