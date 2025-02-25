CREATE TABLE public.cart (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    image TEXT NOT NULL,
    category TEXT NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1
);

ALTER TABLE public.cart ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all users to read and write"
ON public.cart FOR ALL
USING (true)
WITH CHECK (true);
