import http from "http";
import routes from "./routes.js";
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  routes.forEach((r) => {
    if (r.pattern === req.url && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(r.result));
      res.end();
    }
  });

  if (!res.writableEnded) {
    // No routes hit
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
