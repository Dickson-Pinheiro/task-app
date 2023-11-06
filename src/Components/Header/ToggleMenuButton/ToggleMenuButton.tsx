import { PiFunnelSimpleBold } from "react-icons/pi"

interface ToggleMenuButtonProps {
    toggleMenu: () => void
}

export default function ToggleMenuButton({ toggleMenu }: ToggleMenuButtonProps){
    return(
        <PiFunnelSimpleBold data-testid="toggle-menu-button" size={28} onClick={toggleMenu}/>
    )
}