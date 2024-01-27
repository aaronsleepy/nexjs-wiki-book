import { Box } from "@mui/material";
import AppLogo from "components/atoms/AppLogo";
import Flex from "components/layout/Flex";
import Layout from "components/templates/Layout";
import { NextPage } from "next";

/**
 * 로그인 페이지 Presentation Component
 */
const SigninPage: NextPage = () => {
    
    return (
        <Layout>
            <Flex
                paddingTop={2}
                paddingBottom={2}
                paddingLeft={{ base: 2, md: 0}}
                paddingRight={{ base: 2, md: 0 }}
                justifyContent="center"
            >
                <Flex
                    width="400px"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box marginBottom={2}>
                        <AppLogo />
                    </Box>
                    <Box width="100%">
                        
                    </Box>
                </Flex>
            </Flex>
        </Layout>
    )
}