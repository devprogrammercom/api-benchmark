This repo contains application code, that was used to perform benchmarks on GraphQL vs REST vs tRPC in Next.js applications.


## Results

The results and discussion are available on my blog, in the post called [https://devprogrammer.com/programming/graphql-trpc-rest-which-is-faster](GraphQL vs tRPC vs REST: Performance benchmark in Next.js).

## Conducted benchmarks

```bash
hey -z 5s -c 1 -H "Content-Type: application/json" "http://localhost:3000/api/hello"  

hey -z 5s -c 1 -H "Content-Type: application/json" "http://localhost:3000/api/rest" 

hey -z 5s -c 1 -H "Content-Type: application/json" "http://localhost:3000/api/trpcTest?batch=1&input=%7B%7D"

hey -z 5s -c 1 -H "Content-Type: application/json" -m POST -D data.txt "http://localhost:3000/api/graphql"
```


[https://devprogrammer.com](devprogrammer.com)