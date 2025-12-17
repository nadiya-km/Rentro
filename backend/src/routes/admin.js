const express = require("express");
const router = express.Router();

const {
  adminLogin,
  adminLogout,
  getRecentUsers,
  getUserStats,
  getAllUsers,
  toggleUserStatus,
  deleteUser,
} = require("../controllers/admin");

const { isAdmin } = require("../middleware/admin");

/* =========================
   AUTH ROUTES
========================= */
router.post("/login", adminLogin);
router.post("/logout", adminLogout);

router.get("/check-auth", isAdmin, (req, res) => {
  res.status(200).json({ ok: true });
});

router.get("/dashboard", isAdmin, (req, res) => {
  res.json({ message: `Welcome ${req.admin.name}` });
});

/* =========================
   USER MANAGEMENT (ADMIN)
========================= */

// 🔹 all users (for manage users page)
router.get("/users", isAdmin, getAllUsers);

// 🔹 recent users (dashboard)
router.get("/users/recent", isAdmin, getRecentUsers);

// 🔹 user count
router.get("/users/stats", isAdmin, getUserStats);

// 🔹 block / unblock user
router.put("/users/:id/toggle", isAdmin, toggleUserStatus);

// 🔹 delete user
router.delete("/users/:id", isAdmin, deleteUser);

module.exports = router;
