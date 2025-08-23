import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ user }) => {
    const [open, setOpen] = useState(false);
    const [pinned, setPinned] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setOpen(false);
                setPinned(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="relative"
            ref={dropDownRef}
            onMouseEnter={() => {
                if (!pinned) setOpen(true);
            }}
            onMouseLeave={() => {
                if (!pinned) setOpen(false);
            }}
        >
            <div
                onClick={() => {
                    if (pinned) {
                        setPinned(false);
                        setOpen(false);
                    } else {
                        setPinned(true);
                        setOpen(true);
                    }
                }}
                className="w-12 h-12 rounded-full"
            >
                <img
                    src={user?.profileImage}
                    alt={user?.name}
                    className="w-full h-full rounded-full object-cover"
                />
            </div>

            {open && (
                <div className="absolute top-12 right-0 bg-green-100 p-2 rounded-sm">
                    <Link
                        to="/profile"
                        className="w-full text-left block px-4 py-2 text-green-800 hover:bg-green-100"
                    >
                        Profile
                    </Link>

                    <button>Logout</button>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
