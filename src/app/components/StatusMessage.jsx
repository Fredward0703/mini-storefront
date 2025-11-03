'use client';

export default function StatusMessage({ message }) {
    return (
        <div style={{ textAlign: "center", padding:"20px" }}>
        <p>{message}</p>
        </ div>
    );
}