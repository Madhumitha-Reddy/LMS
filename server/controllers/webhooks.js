export const clerkWebhooks = async (req, res) => {
  try {
    console.log('Clerk webhook received:', req.body);
    // Add your webhook logic here
    res.status(200).json({ message: 'Webhook received successfully' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};