export const designCategories = ["All", "Social Media", "Branding", "Posters", "Advertising", "Marketing"] as const;
export type DesignCategory = Exclude<(typeof designCategories)[number], "All">;

export type DesignPiece = {
  id: string;
  title: string;
  category: DesignCategory;
  description: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

const d = (id: string, title: string, category: DesignCategory, width: number, height: number, description: string, alt: string): DesignPiece => ({
  id, title, category, description, width, height, alt, src: `/images/graphics/${id}.webp`,
});

export const designs: DesignPiece[] = [
  d("autumn-latte-post", "Autumn Latte – Instagram Post", "Social Media", 1080, 1080, "A seasonal Instagram promotion for a fictional coffee brand, using a bold cup illustration and a single clear call to action.", "Instagram post concept with a latte cup illustration and the word Autumn"),
  d("move-more-fitness", "Move More – Fitness Challenge", "Social Media", 1080, 1350, "A high-impact portrait social post for a fictional 30-day fitness challenge, built on oversized type and one blue diagonal.", "Black and white social post concept with large Move More type and a blue diagonal band"),
  d("design-meetup-event", "Design Meetup – Event Announcement", "Social Media", 1080, 1080, "An event announcement concept using layered squares and strong contrast to make the date and format easy to read.", "Blue event announcement concept for a design meetup"),
  d("layout-rules-carousel", "4 Layout Rules – Carousel Cover", "Social Media", 1080, 1080, "A four-tile educational carousel cover that turns tips into a clear, swipeable visual system.", "Four-tile social media carousel concept about layout rules"),
  d("lumen-studio-logo", "Lumen Studio – Logo Concept", "Branding", 1080, 1080, "A radiating sun mark paired with a light, lowercase wordmark for a fictional design studio.", "Logo concept with a radiating sun mark and the wordmark lumen studio"),
  d("peak-outdoor-logo", "Peak Outdoor – Logo Concept", "Branding", 1080, 1080, "Overlapping mountain shapes and wide-tracked type for a fictional outdoor supply brand.", "Logo concept with overlapping mountain shapes on a dark green background"),
  d("verde-market-brand-sheet", "Verde Market – Brand Sheet", "Branding", 1500, 1000, "A compact brand sheet for a fictional grocer showing the logotype, colour palette and type specimen.", "Brand identity sheet with logotype, five colour swatches and a type specimen"),
  d("jazz-night-poster", "Jazz Night – Event Poster", "Posters", 1080, 1500, "A retro sunset poster concept for a live music night, with striped shapes and heavy type.", "Event poster concept with a striped orange sun and the words Jazz Night"),
  d("less-but-better-editorial", "Less, but Better – Editorial Layout", "Posters", 1080, 1500, "A typography-led editorial layout exploring scale, columns and white space.", "Editorial poster concept with a giant Aa letterform and columns of text lines"),
  d("open-studio-poster", "Open Studio Day – Poster", "Posters", 1080, 1500, "A high-energy poster concept with stacked type and a checker pattern in black, yellow and blue.", "Yellow poster concept with stacked black type reading Open Studio Day"),
  d("glacier-water-ad", "Glacier Water – Product Ad", "Advertising", 1080, 1350, "A clean product advertisement concept that puts the bottle and a three-word message first.", "Product advertisement concept for a bottled water brand on a pale blue background"),
  d("pulse-headphones-ad", "Pulse One – Headphones Ad", "Advertising", 1080, 1350, "A dark, premium advertisement concept built around a simple headphone illustration and a short headline.", "Headphones advertisement concept with blue ear cups on a black background"),
  d("rose-skincare-ad", "Rose – Skincare Ad", "Advertising", 1080, 1080, "A soft, minimal advertisement concept for a fictional skincare cream, with a calm palette and plenty of space.", "Skincare cream advertisement concept with a pink palette and leaf details"),
  d("flash-sale-banner", "Flash Sale – Promo Banner", "Marketing", 1500, 600, "A wide promotional banner concept with a clear offer badge and a single shop action.", "Yellow and black flash sale banner concept with an offer badge"),
  d("business-growth-banner", "Grow Online – Business Banner", "Marketing", 1500, 600, "A website-hero style banner concept for a fictional business services campaign, pairing a direct headline with a browser preview.", "Blue business banner concept with a headline and a browser window illustration"),
  d("back-to-school-flyer", "Back to School – Campaign Flyer", "Marketing", 1080, 1350, "A seasonal retail campaign flyer concept using bright flat illustration and a bold offer badge.", "Orange back to school campaign flyer concept with a notebook and pencils"),
];
