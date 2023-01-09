import TextBarEffect from "@components/TextBarEffect";
import Link from "next/link";
import styles from './Navbar.module.scss';

const NavButtons = [
    { name: 'Menu', href: '#' },
    { name: 'Locations', href: '#' },
    { name: 'Rewards', href: '#' },
    { name: 'Sign In', href: '#' }
]

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <ol>
                {
                    NavButtons.map((v) =>
                        <li key={v.href}>
                            <Link href={v.href}>
                                <TextBarEffect
                                    text={v.name}
                                    textColor="var(--dark-lava)"
                                    hoverColor="black"
                                    barColor="white"
                                />
                            </Link>
                        </li>
                    )
                }
                {/* <li><Link href={''}>Menu</Link></li>
                <li><Link href={''}>Locations</Link></li>
                <li><Link href={''}>Rewards</Link></li>
                <li><Link href={''}>Sign In</Link></li> */}
            </ol>
            {/* <TextBarEffect
                text="Hello"
                textColor="var(--bistre)"
                barColor="var(--gamboge)"
            /> */}
        </nav>
    );
}

export default Navbar;