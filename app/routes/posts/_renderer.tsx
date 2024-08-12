
import { jsxRenderer } from "hono/jsx-renderer";


export default jsxRenderer(({ children, Layout, title }) => {
    return (
        <Layout>
            <h1> Posts </h1>
            {children}
        </Layout>
    )
})