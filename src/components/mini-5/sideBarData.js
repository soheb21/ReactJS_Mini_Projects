export const SideBarData = [
    {
        label: 'Home',
        to: "/home"
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "/details",
                children: [
                    {
                        label: "Location",
                        to: "/location"
                    }
                ]
            }
        ]
    },
    {
        label: "Setting",
        to: "/setting",
        children: [
            {
                label: "Account",
                to: "/account"
            },
            {
                label: "Security",
                to: "/security",
                children: [
                    {
                        label: "Login",
                        to: "/login",
                    },
                    {
                        label: "Register",
                        to: "/register",
                    }
                ]
            }
        ]
    }

]