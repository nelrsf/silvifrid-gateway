export const microservicesEndpoints = [   
    {
        endpointName: "/getproducts", 
        options: {
            target: "https://silvifrid-catalog-eq.vercel.app",    
            changeOrigin: true
        }
    },
    {
        endpointName: "/createproduct", 
        options: {
            target: "https://silvifrid-catalog-eq.vercel.app",    
            changeOrigin: true
        }
    },
    {
        endpointName: "/auth", 
        options: {
            target: "https://silvifrid-auth.vercel.app",    
            changeOrigin: true
        }
    },
    {
        endpointName: "/product-quantity/getcourierquote", 
        options: {
            target: "https://silvifrid-courier.vercel.app",    
            changeOrigin: true
        }
    },
    {
        endpointName: "/city/getcities", 
        options: {
            target: "https://silvifrid-courier.vercel.app",    
            changeOrigin: true
        }
    },
    {
        endpointName: "/createtransaction", 
        options: {
            target: "https://silvifrid-transactions.vercel.app",    
            changeOrigin: true
        }
    }
]