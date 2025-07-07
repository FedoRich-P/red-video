import {PropsWithChildren} from "react";
import {Layout} from "@/components/layout/Layout";

function PublicLayout({ children}: PropsWithChildren<unknown>) {
	return <Layout>{children}</Layout>
}

export default PublicLayout