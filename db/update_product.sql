UPDATE Products
SET
  Name = COALESCE($2, name),
  Description = COALESCE($3, description),
  Price = COALESCE($4, price),
  ImageUrl = COALESCE($5, imageUrl)

WHERE id = $1
RETURNING *
