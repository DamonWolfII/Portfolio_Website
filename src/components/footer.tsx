import React from 'react'

const Footer = () => {
  return (
    <div className='text-center mt-7'>
     <footer>
    <p>&copy; <span id="year"></span> Kshitij 2025. All Rights Reserved.</p>
</footer>

<script>
    document.getElementById("year").textContent = new Date().getFullYear();
</script>
    </div>
  )
}

export default Footer
