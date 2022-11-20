export const microservicesEndpoints = [   
    {
        endpointName: "/getproducts", 
        options: {
            target: "https://silvifrid-catalog.vercel.app",    
            changeOrigin: true
        }
    },
    {
        endpointName: "/createproduct", 
        options: {
            target: "https://silvifrid-catalog.vercel.app",    
            changeOrigin: true
        }
    },
    {
        endpointName: "/auth", 
        options: {
            target: "https://silvifrid-auth-db4v.vercel.app",    
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
    }
]