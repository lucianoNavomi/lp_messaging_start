const qs = require("qs");

var getToken = (req, res, next) => {
  console.log(`mock_plasma - getToken`);
  console.log(`mock_plasma - getToken - req.body: `, qs.parse(req.body));
  console.log(`mock_plasma - getToken - req.baseUrl: `, req.baseUrl);
  console.log(`mock_plasma - getToken - req.originalUrl: `, req.originalUrl);

  const grant_type = req.body.grant_type;
  const client_id = req.body.client_id;
  const client_secret = req.body.client_secret;
  const resource = req.body.resource;

  const responseObj = {
    token_type: 'Bearer',
    access_token: 'ABCDEFGiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSIsImtpZCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSJ9.eyJhdWQiOiJodHRwOi8vbXN4ZW50aXR5aW5nZXN0aW9ucHBlLmF6dXJld2Vic2l0ZXMubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImlhdCI6MTU4NTA2MDgxOCwibmJmIjoxNTg1MDYwODE4LCJleHAiOjE1ODUwNjQ3MTgsImFpbyI6IjQyTmdZR2lUbVI3aGQycGFqMkNRbkVCSm0vVTNBQT09IiwiYXBwaWQiOiJkNDU3MjU1MC1mOTIwLTRmYWEtYjllZi05YmMyOGU0OGE2MGYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiMjE4ZmJiZjAtMzc4OS00ODRmLWEzMDAtNGE2NWVkNmIxNTliIiwic3ViIjoiMjE4ZmJiZjAtMzc4OS00ODRmLWEzMDAtNGE2NWVkNmIxNTliIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidXRpIjoiR24wc0YwV0tNVTZLTnpUSmN6MFNBQSIsInZlciI6IjEuMCJ9.CO608mQqM3d1iyDkzOh4jm6z0LHae_kOT4eT4uS47dVcI5dey7_N6KpgB0KhJYSXoHvgiB5Y5lcE1lH_xTsD04p3G2gKhPrGz3QWD1sknxk2SDpppk7a4f4BGLByyWyGsR9xv0ZRZMHjAs3_4B33crI_hBS6fKQkvB9SL4ZRXUVlvLNJ1X0WHwV0wFoUaZ0G4qX_pKYsa8uZqeeGNcDTID-ui_pR9uvWv6BPbr2q06wq5uLhkblBWElrw4Vrj61lN4KxzDvwVgM69Yd3lLZuYml2aR1TIgjBD5DrWylli34-OHgbsRgRaPXTksPf-q4xjGpCG4msM1WUeSVmMeb0xQ'
  };

  res.json(responseObj);

  // return res;
}

module.exports = {
  getToken
};