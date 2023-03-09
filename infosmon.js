let query = '{boards(limit:1) { name id description items { name column_values{title id type text } } } }';

fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI0Mjk0NTQzMSwidWlkIjo0MDczMzk4NCwiaWFkIjoiMjAyMy0wMy0wOVQxMzozNToxNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTU4NTMwNTMsInJnbiI6InVzZTEifQ.UD6ZFzbtE5hNBwkaW9fZ6GSo43zHnhIByRCTJ8ne1CM'
  },
  body: JSON.stringify({
    'query' : query
  })
})
  .then(res => res.json())
  .then(res => console.log(JSON.stringify(res, null, 2)));